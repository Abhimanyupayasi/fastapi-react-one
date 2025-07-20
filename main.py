from database import db, collection, client
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from bson import ObjectId

app = FastAPI()



app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods = ["*"],
    allow_headers = ["*"]
)


class Note(BaseModel):
    title : str
    content : str

@app.post("/create")
def create_post(note : Note):
    note_data = note.dict()
    result = collection.insert_one(note_data)
    print(str(result.inserted_id))
    return {
        "message" : "created sucessfully",
        "id"  : str(result.inserted_id)
    }

def convert_note(note: Note):
    return{
        "id" : str(note["_id"]),
        "title" : str(note["title"]),
        "content" : str(note["content"])
    }
   
@app.get("/all-notes")
def allNotes():
     arr = []
     result =  collection.find()
     for note in result :
         arr.append(convert_note(note))
     return arr

@app.get("/fetchOne/{id}")
def fetchOne(id:str):
    result = collection.find_one({"_id" : ObjectId(id)})
    return{
        "message" : "fetch successfully",
        "data" : convert_note(result)
    }

@app.get("/delete/{id}")
def delete_note(id:str):
    result = collection.delete_one({"_id" : ObjectId(id)})
    if(result.deleted_count==1):
        return {
            "message" : "deleted successfully",

        }
    else:
        return {
            "message" : "error"
        }

@app.delete("/deleteOne/{id}")
def deleteOne(id : str):
    result  = collection.delete_one({"_id" : ObjectId(id)})
    if(result.deleted_count==1):
        return{
        "message" : "deleted successfully"
        }
    else:
        return{
            "message": "error"
        }


@app.put("/update/{id}")
def update(id : str, note : Note):
    note_data = note.dict()
    result = collection.update_one(
        {"_id" : ObjectId(id)},
        {"$set" : note_data}
    )
    if result.matched_count==1:
        return{
            "message" : "updated successfully",
             "data" : str(result)
         }
    else: return{
        "message" : "ERROR"
    }

