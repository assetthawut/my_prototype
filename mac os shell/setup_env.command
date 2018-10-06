# install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# install pdf2htmlex 
brew install pdf2htmlex 

# base file directory 
BASE_FILE_DIR=$(dirname "$0")
cd $(echo $BASE_FILE_DIR)
 

# copy files to installation folder 
cp source/* /usr/local/Cellar/pdf2htmlex/0.14.6_20/share/pdf2htmlEX

# display command 
pdf2htmlex 


