import time
from selenium import webdriver

def findKeyword(driver, keyword)->bool:
	# print(driver.page_source.lower())
	return keyword.lower() in driver.page_source.lower()

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

rewardTime = 10
totalTime = 0
keywords = ["hobbies", "experience"]
for key in keywords:
	if findKeyword(driver, key):
		print("found", key)
		time.sleep(rewardTime)
		totalTime += rewardTime
	else:
		print("not found")
driver.quit()

print("Presence Time:", totalTime)
