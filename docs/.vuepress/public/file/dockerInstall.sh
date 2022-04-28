#!/bin/bash
#设置时区
timedatectl set-timezone Asia/Shanghai 
#创建文件夹并移动文件
mkdir -p /usr/zksc
mv zksc-install-docker.tar /usr/zksc
cd /usr/zksc
tar -zxvf zksc-install-docker.tar
tar -zxvf docker-20.10.1.tgz
mv docker/* /usr/bin/
rm docker-20.10.1.tgz
mv docker.service /etc/systemd/system/
chmod +x /etc/systemd/system/docker.service
systemctl daemon-reload
systemctl start docker
echo "========docker版本========"
docker -v
systemctl enable /etc/systemd/system/docker.service
#安装docker-compose
mv docker-compose-Linux-x86_64 /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose
echo "========docker-compose版本========"
docker-compose -v
rm zksc-install-docker.tar




