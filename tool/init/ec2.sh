sudo yum update
sudo yum install -y gcc-c++ make openssl-devel git

# install node
cd /tmp
git clone https://github.com/nodejs/node.git
cd node
sudo ./configure
sudo make
sudo make install

sudo ln -s /usr/local/bin/node /usr/bin/node

# install npm
cd /tmp
git clone https://github.com/npm/cli.git
cd cli
sudo make
sudo make install

#sudo ln -s /usr/local/bin/npm /usr/bin/npm
