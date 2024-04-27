#! /usr/bin/env node
import inquirer from "inquirer";
let todolist = [];
let conditions = true;
console.log("\n\t WELCOME TO RAFIA's APPLICATION \n");
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option you want to do",
                choices: ["add task", "delete task", "update task", "view todo-list", "exit"]
            }
        ]);
        if (option.choice === "add task") {
            await addtask();
        }
        else if (option.choice === "delete task") {
            await deletetask();
        }
        else if (option.choice === "update task") {
            await updatetask();
        }
        else if (option.choice === "view todo-list") {
            await viewtask();
        }
        else if (option.choice === "exit") {
            conditions = false;
        }
    }
};
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "enter your new task:",
        }
    ]);
    todolist.push(newtask.task);
    console.log(`\n ${newtask.task} task added sucessfully`);
};
let viewtask = () => {
    console.log("\n your todo-list: \n");
    todolist.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let deletetask = async () => {
    await viewtask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index no you want to delete:"
        }
    ]);
    let deletedtask = todolist.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedtask} this task has been deleted sucessfully`);
};
let updatetask = async () => {
    await viewtask();
    let updateIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "enter the index no you want to update:"
        },
        {
            name: "new_task",
            type: "input",
            message: "now enter the new task name:"
        }
    ]);
    todolist[updateIndex.index - 1] = updateIndex.new_task;
    console.log(`\n task of index no. ${updateIndex.index - 1} updated sucessfully for upload to-do list`);
};
main();
