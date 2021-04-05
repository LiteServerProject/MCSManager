FROM mc-openjdk-11-base:latest
RUN apt update \
    && apt install -y vim curl \
    && rm -rf /var/lib/apt/lists/*
RUN cd /usr \
    && curl -vSL https://nodejs.org/dist/v12.21.0/node-v12.21.0-linux-x64.tar.xz | tar --strip-components 1 -xJ
COPY package.json /opt/MCSManager/
COPY package-lock.json /opt/MCSManager/
RUN cd /opt/MCSManager && npm install
COPY . /opt/MCSManager/
RUN cp /opt/MCSManager/mcsm.service /lib/systemd/system/ && systemctl enable mcsm
