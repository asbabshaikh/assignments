//Tetscase 1

launchBrowserAndLogin("Edge");
console.log("click on add algo button");
console.log("click on first strategy and click on launch button");
console.log("actualNP: " + getActualNP());
logoutAndCloseBrowser();


//testcase 2
launchBrowserAndLogin("Chrome", "10.80.33.165:8006");
console.log("click on load button");
console.log("click on first portfolio and click on load button");

logoutAndCloseBrowser();

//seperate duplicate code into function
// put duplicate code in {}block
// unique name to the function to each and every block



// function launchBrowserAndLogin() {
//     console.log("launch the Chrome browser");  
// console.log("open the URL: metanoia.com");
// console.log("enter the username as 'Asbab.shaikh' and password as 'abcd'");
// console.log("click on the login button");
// }

function logoutAndCloseBrowser() {
    console.log("click on the profile button and click on the logout button");
    console.log("close the browser");
}

//function with parameter
function launchBrowserAndLogin(browserName, url) {
    console.log(`launch the ${browserName} browser`); // ` used backtick for string and ${} for variable 
console.log(`open the URL: ${url}`);
console.log("enter the username as 'Asbab.shaikh' and password as 'abcd'");
console.log("click on the login button");
}


//function with return type
function getActualNP() {
    let actualNP = 100;
    return actualNP;
}