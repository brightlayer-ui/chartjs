
#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -en "${BLUE}Building @pxblue/chartjs...\n${NC}"
tsc
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Creating new folder in node_modules... (react)\n${NC}"
cd demo-react
rm -rf "./node_modules/@pxblue/chartjs"
mkdir "./node_modules/@pxblue/chartjs"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying @pxblue/chartjs into node_modules...(react)\n${NC}";
cp -r ./../package.json ./node_modules/@pxblue/chartjs/package.json
cp -r ./../dist ./node_modules/@pxblue/chartjs
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Creating new folder in node_modules... (angular)\n${NC}"
cd ../demo-angular
rm -rf "./node_modules/@pxblue/chartjs"
mkdir "./node_modules/@pxblue/chartjs"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying @pxblue/chartjs into node_modules...(angular)\n${NC}";
cp -r ./../package.json ./node_modules/@pxblue/chartjs/package.json
cp -r ./../dist ./node_modules/@pxblue/chartjs
echo -e "${GREEN}Done${NC}"

echo -e "${GRAY}Complete${NC}\r\n"