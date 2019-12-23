FROM centos:7
RUN yum -y install epel-release nodejs && yum -y install --enablerepo=epel npm

COPY . /src

WORKDIR /src

EXPOSE 80

ENTRYPOINT ["node", "./hello.js"]

