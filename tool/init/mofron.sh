#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);
cd $SCP_DIR/../../

error () {
    echo "ERROR : $1"
    echo "the script is failed"
    exit -1
}

echo " ** start install front-end framework"

sudo npm install mofron $@
if [ $? != 0 ]; then
    error "could not install mofron"
fi
bash ./tool/build.sh

echo " ** successful install nodejs environments"

