# To-Do-List
It is a basic todo list that is used to organize tasks and increase productivity
# To-Do-List Snippet
![Screenshot (1)](https://github.com/user-attachments/assets/988e8ce6-04d8-431d-a0b0-3eaa9217ee80)
#Testing Guidance
#Create Vite Project
. npm create vite@latest my-react-app --template react

# Run the app:
. cd my-react-app

. npm install

. npm run dev # if using Vite

#Features
✅ Basic Functionality Tests
 1) Add Task

   . Enter a task and click Add

   . ✔️ Task appears in the list

 2)  Validation

   . Click Add without typing anything

   . ✔️ Alert appears: "Task cannot be empty."

 3)  Mark as Complete

   .  Click on a task text

   .✔️ Text gets strikethrough and turns gray

 4)  Delete Task

   . Click the Delete button next to a task

   . ✔️ Task is removed from the list
✅ Filter Test
.Change filter dropdown to:

   . All → Shows all tasks

   .  Active → Shows only unchecked tasks

   .  Completed → Shows only checked tasks
✅ Persistence (localStorage)
Add a few tasks

Refresh the page

✔️ Tasks should still be visible (persisted in localStorage)


# server

https://github.com/ridhigandhi003/Celebel-To-Do-List.git
