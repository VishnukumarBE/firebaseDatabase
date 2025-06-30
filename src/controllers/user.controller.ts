import { User } from "../dto/user.dto";
import { Request,Response } from "express";
import { db } from "../db";
export const createUser=async (req: Request, res: Response) => {
 try{
  const userData: User = req.body;
  const newRef = db.ref("users").push(); 
  await newRef.set(userData);
  res.status(201).json({ message: "User created" });
 }catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
}
export const getUserById=async (req: Request, res: Response) => {
 try{
     const uid = req.params.uid;
  const snapshot = await db.ref(`users/${uid}`).once("value");

  if (!snapshot.exists()){
      res.status(404).json({ error: "User not found" });
      return 
  } 
  res.json(snapshot.val());
 }catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
}
export const updateUserById=async (req: Request, res: Response) => {
 try{
     const uid = req.params.uid;
     const snapshot = await db.ref(`users/${uid}`).once("value");
  if (!snapshot.exists()){
      res.status(404).json({ error: "User not found" });
      return 
  } 
     const userData:User=req.body
  await db.ref(`users/${uid}`).update(userData);
  res.json({ message: "User updated" });
 }catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
}
export const deleteUserById=async (req: Request, res: Response) => {
 try{
     const uid = req.params.uid;
     const snapshot = await db.ref(`users/${uid}`).once("value");

  if (!snapshot.exists()){
      res.status(404).json({ error: "User not found" });
      return 
  } 
  await db.ref(`users/${uid}`).remove();
  res.json({ message: "User deleted" });
 } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
 
}
export const getAllUsers=async (req: Request, res: Response) => {
  try {
    const snapshot = await db.ref("users").once("value");
    const data = snapshot.val();

    if (!data) {
       res.status(200).json({ message: "No users found", users: [] });
       return
    }
    res.json( data );
  } catch (err) {
    res.status(500).json({ error: "Something went wrong", details: err });
  }
}
