import os
from random import randint

# List of files to monitor
monitored_files = ['App.vue', 'Main.vue', 'main.js']

for _ in range(randint(1, 10)):
    for i in range(1, 365):
        d = str(i) + 'days ago'
        with open('file.txt', 'a') as file:
            file.write(d)

        os.system('git add .')
        os.system('git commit --date="' + d + '" -m "commit"')

os.system('git push -u origin main')
