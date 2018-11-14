#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);

error () {
    echo "ERROR : $1"
    echo "init.sh is failed"
    exit -1
}

echo "*** start init centos"

bash $SCP_DIR/deltemp.sh
bash $SCP_DIR/centos/node.sh
bash $SCP_DIR/mofron.sh

echo "*** successful init centos"
