FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/PRINCE-GDS/PRINXE-MD /root/prinxe

WORKDIR /root/prinxe/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
