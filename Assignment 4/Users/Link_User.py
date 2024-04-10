import time
from selenium import webdriver
from selenium.webdriver.common.by import By

def clickLink(driver, tag_name)->int:
	return len(driver.find_elements(By.TAG_NAME,tag_name))

#def clickLink(driver):
#	links = driver.find_elements(By.TAG_NAME, "a")
#	for link in links:
#		link.click()

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

rewardTime = 10
totalTime = 0
tags = ["a"]
for elements in tags:
	linkNum = clickLink(driver, elements)
	print("found", linkNum, elements, "elements")
	time.sleep(rewardTime)
	totalTime += (rewardTime*linkNum)
	if (linkNum == 0):
		print("no link(s) found")
driver.quit()

print("Presence Time:", totalTime)
