const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

async function findKeyword(driver, keyword) {
  const pageSource = await driver.getPageSource();
  return pageSource.toLowerCase().includes(keyword.toLowerCase());
}

async function imageCount(driver, tagName) {
  const elements = await driver.findElements(By.tagName(tagName));
  return elements.length;
}

async function userAction(action, driver, rewardTime, reqList) {
  let totalTime = 0;
  const keywords = reqList;
  if (action.toUpperCase() === "KEYWORD") {
    for (const key of keywords) {
      if (await findKeyword(driver, key)) {
        console.log("found", key);
        await new Promise(resolve => setTimeout(resolve, rewardTime * 1000));
        totalTime += rewardTime;
      } else {
        console.log("not found");
      }
    }
  } else if (action.toUpperCase() === "IMAGE") {
    const tags = reqList;
    for (const element of tags) {
      const imageNum = await imageCount(driver, element);
      console.log("found", imageNum, element, "elements");
      await new Promise(resolve => setTimeout(resolve, rewardTime * 1000));
      totalTime += rewardTime * imageNum;
      if (imageNum === 0) {
        console.log("no image(s) found");
      }
    }
  }
  return totalTime;
}

(async () => {
  const options = new chrome.Options();
  const driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();

  await driver.get("http://localhost:3000/");

  const rewardTime = 5;
  let totalTime = await userAction("KEYWORD", driver, rewardTime, ["hobbies", "engineer", "experience"]);
  const tagName = ["img"];
  rewardTime = 10;
  totalTime += await userAction("IMAGE", driver, rewardTime, tagName);
  await driver.quit();

  console.log("Presence Time:", totalTime);
})();