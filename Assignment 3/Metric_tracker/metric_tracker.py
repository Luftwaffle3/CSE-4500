import time
from selenium import webdriver
import sqlite3

# Initialize browser
driver = webdriver.Chrome()

# Navigate to your website 
driver.get("http://localhost:3000/")

# Connect to SQLite database
conn = sqlite3.connect('metrics.db')
cursor = conn.cursor()

# Create metrics table if not exists
cursor.execute('''CREATE TABLE IF NOT EXISTS metrics 
                (id INTEGER PRIMARY KEY AUTOINCREMENT, 
                presence_time REAL, 
                scrolled_pixels INTEGER)''')

while True:
    # Track presence time 
    start_time = time.time()
    presence_time = start_time
    print(f"Presence time: {presence_time} seconds")

    # Track scrolling
    scroll_height = driver.execute_script("return document.body.scrollHeight")  
    current_scroll = driver.execute_script("return window.pageYOffset")
    print(f"Scrolled {current_scroll}/{scroll_height} pixels")

    # Store metrics in the database
    cursor.execute('''INSERT INTO metrics (presence_time, scrolled_pixels) 
                    VALUES (?, ?)''', (presence_time, current_scroll))
    conn.commit()

    time.sleep(2)

    # Break the loop after a certain condition
    # if presence_time > 50:
    #     break

driver.quit()
