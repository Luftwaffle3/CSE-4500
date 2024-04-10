import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def findKeyword(driver, keyword)->bool:
	# print(driver.page_source.lower())
	return keyword.lower() in driver.page_source.lower()

def imageCount(driver, tag_name)->int:
	return len(driver.find_elements(By.TAG_NAME,tag_name))

def userAction(action, driver, rewardTime, reqList)->float:
	totalTime = 0
	if action.upper() == "KEYWORD":
		for key in keywords:
			if findKeyword(driver, key):
				print("found", key)
				time.sleep(rewardTime)
				totalTime += rewardTime
			else:
				print("not found")
	elif action.upper() == "IMAGE":
		imageNum = imageCount(driver, elements)
		print("found", imageNum, elements, "elements")
		time.sleep(rewardTime)
		totalTime += (rewardTime*imageNum)
		if (imageNum == 0):
			print("no image(s) found")
	return totalTime
def clickLink(driver, href):
	links = driver.find_elements(By.TAG_NAME, "a")
	for link in links:
		link.click()

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

rewardTime = 10
totalTime = userAction("KEYWORD", driver, rewardTime, ["student", "test"])
tag_name = ["img"]
totalTime += userAction("IMAGE", driver, rewardTime, [tag_name])
#clickLink(driver)
driver.quit()

print("Presence Time:", totalTime)
