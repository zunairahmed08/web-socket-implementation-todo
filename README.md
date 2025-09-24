

                       FULL STACK TODO APP                           

                                                                       
  QUICK START (2 TERMINALS):                                          
                                                                        
 Terminal 1 - Backend:                                                  
   cd webSocket && npm install && node server.js                      
    ws://localhost:3001                                            
  terminal 2 - frontend                                                                
    cd todo-list && npm install && npm run dev                          
    http://localhost:5173                                           
                                                                       
 FEATURES:                                                          
   Frontend:                            Backend:                       
   • Add/Edit/Delete Tasks              • Real-time WebSocket         
    • Responsive Design                  • Multi-client sync           
    • Task History Page                  • In-memory storage            
    • Real-time updates                  • Event broadcasting          
    
  PROJECT STRUCTURE:                                                  
  Frontend (todo-list/):              Backend (webSocket/):           
    ├── src/components/                 ├── server.js                       ├── TodoItem.jsx                ├── package.json                
   │   ├── TodoForm.jsx                └── node_modules/               
   │   ├── TodoList.jsx                                                
   │   └── UI/                                                       
   ├── App.jsx                                                         
   ├── LogPage.jsx                                                     
   └── main.jsx                                                        
                                                                       
 REAL-TIME COMMUNICATION:                                           
    Client Events: addTask, updateTask, deleteTask, getTasks            
    Server Events: tasksUpdate, taskAdded, taskUpdated, taskDeleted     
