const vchar = '[^\\s\\$:;<>\\[\\]\\(\\)\\-\\,\\.\\{\\}+=*!?/\\\\|`~@#%^&\'"]';
const mob = `${vchar}+(?: [A-Z][a-z]*)?`;

const reasonMapping = new Map(Object.entries({
  'was pricked to death': 'cactus',
  'was squished too much': 'squash',
  'blew up': 'explode',
  'fell from a high place': 'highfall',
  'fell off a ladder': 'ladderfall',
  'fell off some vines': 'vinefall',
  'fell off some twisting vines': 'twistingvinefall',
  'fell off some weeping vines': 'weepingvinefall',
  'fell off scaffolding': 'scaffoldingfall',
  'fell while climbing': 'climbfell',
  'fell out of the water': 'waterfall',
  'fell into a patch of fire': 'firedrop',
  'fell into a patch of cacti': 'cactusdrop',
  'was killed by [Intentional Game Design]': 'bedbomb',
}));

function getHandler(baseReason, ifMob, ifWeapon) {
  if (ifMob && ifWeapon) {
    return (result) => {
      if (result[2]) {
        return {
          args: [result[1], result[2]],
          reason: `${baseReason}-mob-weapon`
        }
      }

      if (result[1]) {
        return {
          args: [result[1]],
          reason: `${baseReason}-mob`
        }
      }

      return {
        reason: baseReason
      }
    }
  }

  // mob: false, weapon: true
  if (ifWeapon) {
    return (result) => {
      if (result[2]) {
        return {
          args: [result[1], result[2]],
          reason: `${baseReason}-mob-weapon`
        }
      }

      return {
        args: [result[1]],
        reason: `${baseReason}-mob`,
      }
    }
  }

  // mob: true, weapon: false
  if (ifMob) {
    return (result) => {
      if (result[1]) {
        return {
          args: [result[1]],
          reason: `${baseReason}-mob`
        }
      }

      return {
        reason: baseReason
      }
    }
  }

  // mob: false, weapon: false
  return (result) => {
    return {
      args: [result[1]],
      reason: `${baseReason}-mob`
    }
  }
}

const handlers = new Map();
handlers.set(`^was shot by (${mob})(?: using (.+))?$`, getHandler('arrow', true, true));
handlers.set(`^walked into a cactus whilst trying to escape (${mob})$`, getHandler('cactus'));
handlers.set(`^was roasted in dragon breath(?: by (${mob}))?$`, getHandler('breath', true));
handlers.set(`^drowned(?: whilst trying to escape (${mob}))?$`, getHandler('drown', true));
handlers.set(`^suffocated in a wall(?: whilst fighting (${mob}))?$`, getHandler('suffocate', true));
handlers.set(`^was squashed by (${mob})$`, getHandler('squash'));
handlers.set(`^experienced kinetic energy(?: whilst trying to escape (${mob}))?$`, getHandler('aircrash', true));
handlers.set(`^removed an elytra while flying whilst trying to escape (${mob})$`, getHandler('wingless'))
handlers.set(`^was blown up by (${mob})(?: using (.+))?$`, getHandler('explode', true, true));
handlers.set(`^hit the ground too hard(?: whilst trying to escape (${mob}))?$`, getHandler('fall', true));
handlers.set(`^was doomed to fall(?: by (${mob})(?: using (.+))?)?$`, getHandler('doomfall', true, true));
handlers.set(`^fell too far and was finished by (${mob})(?: using (.+))?$`, getHandler('farfall', false, true));
handlers.set(`^was shot off some vines by (${mob})$`, getHandler('vineshot'));
handlers.set(`^was shot off a ladder by (${mob})$`, getHandler('laddershot'));
handlers.set(`^was blown from a high place by (${mob})$`, getHandler('blownoff'));
handlers.set(`^walked into fire whilst fighting (${mob})$`, getHandler('selfburning'));
handlers.set(`^was burnt to a crisp whilst fighting (${mob})$`, getHandler('burned'));
handlers.set(`^went off with a bang(?: whilst fighting (${mob}))?$`, getHandler('fireworks', true));
handlers.set(`^tried to swim in lava(?: to escape (${mob}))?$`, getHandler('lava', true));
handlers.set(`^was struck by lightning(?: whilst fighting (${mob}))?$`, getHandler('lightning', true));
handlers.set(`^walked into danger zone due to (${mob})$`, getHandler('magmablock'));
handlers.set(`^was slain by (${mob})(?: using (.+))?$`, getHandler('slain', false, true));
handlers.set(`^got finished off by (${mob})(?: using (.+))?$`, getHandler('finished', false, true));
handlers.set(`^was fireballed by (${mob})(?: using (.+))?$`, getHandler('fireball', false, true));
handlers.set(`^was killed by(?: even more| (${mob}) using)? magic$`, getHandler('magic', true));
handlers.set(`^starved to death(?: whilst fighting (${mob}))?$`, getHandler('starve', true));
handlers.set(`^was poked to death by a sweet berry bush(?: whilst trying to escape (${mob}))?$`, getHandler('berry', true));
handlers.set(`^was killed(?: by (.+))? trying to hurt (${mob})$`, getHandler('thorn', false, true));
handlers.set(`^was impaled by (${mob})(?: using (.+))?$`, getHandler('trident', false, true));
handlers.set(`^didn't want to live in the same world as (${mob})$`, getHandler('fallout'));
handlers.set(`^withered away(?: whilst fighting (${mob}))?$`, getHandler('wither', true));
handlers.set(`^was pummeled by (${mob})(?: using (.+))?$`, getHandler('pummel', false, true));
handlers.set(`^died(?: because of (${mob}))?$`, getHandler('die', true));
// Special names
handlers.set(`^was squashed by a falling (?:anvil|block)(?: whilst fighting (${mob}))?$`, (result) => {
  if (result[1]) {
    return {
      args: [result[1]],
      reason: 'fightsquash-mob',
    }
  }

  return {
    reason: 'squash'
  }
})


function parseDeath(text) {
  const regDeath = new RegExp(`^(${vchar}+) (.+)$`)
  let result = regDeath.exec(text)
  if (!result) return null

  let victim = result[1]
  let reason = result[2]
  let args = []

  for (const [key, value] of reasonMapping) {
    if (reason === key) {
      reason = value;
      return [reason, victim, ...args];
    }
  }

  if (reason.endsWith('fell out of the world')) {
    reason = 'fallout';
    return [reason, victim, ...args];
  }

  for (const [key, cb] of handlers) {
    const reg = new RegExp(key);
    const result = reg.exec(handlers);
    if (result) {
      const ret = cb(result);
      args = ret.args;
      reason = ret.reason;
      return [reason, victim, ...args];
    }
  }

  return null;
}

function ParseConsoleText(inText) {
  let text = inText.trim()

  const reg = /^\[\d{2}:\d{2}:\d{2}\] \[Server thread\/INFO\]: (.*)$/
  let res = reg.exec(text)
  if (!res) return

  text = res[1]

  const regJoin = new RegExp(`^(${vchar}+) joined the game$`)
  const regLeave = new RegExp(`^(${vchar}+) left the game$`)
  const regStart = /^Done \([0-9\.]+s\)! For help, type "help"$/
  const regStop = /^Stopping server$/
  const regMsg = new RegExp(`^<(${vchar}+)> (.+)$`)
  const regServerMsg = new RegExp(`^\\[(${vchar}+)\\] (.+)$`)
  const regAdvance = new RegExp(`^(${vchar}+) has (?:made the advancement|reached the goal|completed the challenge) \\[(.+)\\]$`)

  res = regJoin.exec(text);
  if (res) {
    return {
      type: 'join',
      player: res[1],
    }
  }

  res = regLeave.exec(text)
  if (res) {
    return {
      type: 'leave',
      player: res[1],
    }
  }

  if (regStart.exec(text)) {
    return {
      type: 'start',
    }
  }

  if (regStop.exec(text)) {
    return {
      type: 'stop',
    }
  }

  res = regMsg.exec(text);
  if (res) {
    return {
      type: 'chat',
      sender: res[1],
      content: res[2],
    }
  }

  res = regServerMsg.exec(text);
  if (res) {
    return {
      type: 'server',
      sender: res[1],
      content: res[2],
    }
  }

  res = regAdvance.exec(text);
  if (res) {
    return {
      type: 'advancement',
      player: res[1],
      advancement: res[2]
    }
  }

  res = parseDeath(text);
  if (res) {
    return {
      type: 'death',
      reason: res[0],
      victim: res[1],
      args: res.splice(0, 2),
    }
  }

  return null;
}

module.exports = ParseConsoleText;
