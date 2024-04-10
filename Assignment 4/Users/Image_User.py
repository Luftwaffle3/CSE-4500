import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def imageCount(driver, tag_name)->int:
	return len(driver.find_elements(By.TAG_NAME,tag_name))

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

rewardTime = 10
totalTime = 0
tags = ["img"]
for elements in tags:
	imageNum = imageCount(driver, elements)
	print("found", imageNum, elements, "elements")
	time.sleep(rewardTime)
	totalTime += (rewardTime*imageNum)
	if (imageNum == 0):
		print("no image(s) found")
driver.quit()

print("Presence Time:", totalTime)
