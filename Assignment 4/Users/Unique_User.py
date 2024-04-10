import time
from selenium import webdriver

def findKeyword(driver, keyword)->bool:
	print(driver.page_sorce.lower())
	return keyword.lower() in driver.page_sorce.lower()

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

rewardTime = 10
totalTime = 0
keywords = ["student"]
for keyword in keywords:
	if findKeyword(driver, keyword):
		print("found", keyword)
		time.sleep(rewardTime)
		totalTime += rewardTime
	else:
		print("not found")
driver.quit()

print("Presence Time:", totalTime)
