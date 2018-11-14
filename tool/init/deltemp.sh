#!/bin/bash
SCP_DIR=$(cd $(dirname $0);pwd);

error () {
    echo "ERROR : $1"
    echo "the script is failed"
    exit -1
}

echo " ** start delete temporary files"
if [ -f $SCP_DIR/../../LICENSE ]; then
    sudo rm $SCP_DIR/../../LICENSE
    if [ $? != 0 ]; then
        error "could not delete LICENSE"
    fi
fi

if [ -f $SCP_DIR/../../README.md ]; then
    sudo rm $SCP_DIR/../../README.md
    if [ $? != 0 ]; then
        error "could not delete README.md"
    fi
fi

if [ -d $SCP_DIR/../../.git ]; then
    sudo rm -rf $SCP_DIR/../../.git
    if [ $? != 0 ]; then
        error "could not delete .git"
    fi
fi

sudo rm -rf $SCP_DIR/../../src/js/app/.dmy
sudo rm -rf $SCP_DIR/../../src/js/comp/.dmy
sudo rm -rf $SCP_DIR/../../html/.dmy
sudo rm -rf $SCP_DIR/../../img/.dmy
sudo rm -rf $SCP_DIR/../../font/.dmy

echo " ** successful delete temporary files"
