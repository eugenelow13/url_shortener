# url_shortener
## Installation (ignore this if you have already installed)

Things needed for this application: NodeJS, ExpressJS, MySQL (WAMP), shortid(npm), ejs(npm), nodemon(npm)
### Windows
1) Install NodeJS runtime environment from https://nodejs.org/en/download/
2) Download VCREDIST from https://drive.google.com/file/d/1SqnaAvEGNjZXNUPQa1K4o62eWFg82BVp/view?usp=share_link
3) Install WAMP from https://sourceforge.net/projects/wampserver/ (Windows).
4) Right click on the install WAMP icon and run as Administrator, click yes when prompted "Do you want to allow this app from an unknown publisher to make
changes to your device?" Afterwards, select "English" and click OK to continue. 
5) Select "I accept the agreement" in the license agreement screen and click Next to continue.
6) You will see an information screen. Before clicking [Next] on the Setup Wizard screen that appears as shown
below, do read the contents of the window. Do ensure all steps and
installations are taken prior to installation of your Wampserver.
7) You will be asked to specify the Destination Location to be installed.
8) Click [Next] to accept the default (recommended). Or [Browse] to specify your own folder but be sure to install to
the root of any drive. C:\ or D:\ etc. Please remember the folder name if you choose to install in a different
directory or drive.
9) Make sure the default MYSQL 8.0.31 is selected.
10) You will be asked to Select a Start Menu Folder.
Figure 6: Start Menu Folder
11) Click [Next] to accept the default.
12) You will be shown a confirmation screen detailing the installation directory.
Figure 7: Installation confirmation screen.
13) Click [Install] if all the information is correct.
14) Setup will ask for your default browser. We will use Chrome as our default Browser.
15) Click [Yes]. Go to C:\Program Files (x86)\Google\Chrome\Application and click on Chome.exe or
C:\Program Files\Google\Chrome\Application and click on Chome.exe
Figure 9: Selecting Chrome as default browser
16) Click [Open].
17) You will be asked for your default text editor.
18) Click [No] for now.
19) Setup will ask you to read this screen. Click [Next] to complete the installation.
20) Setup is completed.
Note: If you happened to see a window security alert, click [allow access].

### MAC
1) You can download MAMP from https://www.mamp.info/en/downloads/. 
2) After download, you can find it in the /Downloads directory:
3) Double-click the ‘open box’ to start the installation and follow the instructions.
Note: “This installer installs the folder MAMP and the application MAMP PRO in the Applications
directory. Do not move or rename the folder MAMP.”
4) Launch MAMP.
5) Select Apache as the web server. Note: Nginx is another flavour of web server; it will not be used.
Note: Apache root directory is /Applications/MAMP/htdocs.
6) Select 8.0.8 as the PHP version.
7) Click “Preferences” (top-left).
8) Turn off PHP caching.
9) Set ports to 80 & 3306.
Note: by convention, these are default Apache and MySQL ports.
10) There is only one version of MySQL (5.7.34).
11) Start MAMP. Click on “WebStart”.
12) Setup is completed.


## Running the URL Shortener Application
1) Open a terminal such as cmd and cd to C:\wamp64\www\
2) git clone https://github.com/eugenelow13/url_shortener.git
3) npm run dev















