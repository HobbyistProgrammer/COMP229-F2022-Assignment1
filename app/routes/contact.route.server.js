/**
    Name: Benton Le
    Student#: 301174103
    Date: 10/21/2022
    Professor: Thiago Vitor De Castilho
    Assignment: Assignment 2
    Course: COMP229-402
*/
import { Router } from "express";

import {  DisplayContactsList, 
    DisplayContactsAddPage, 
    ProcessContactsAddPage, 
    ProcessContactsEditPage, 
    DisplayContactsEditPage, 
    ProcessContactsDelete } from "../controllers/contact.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/contact-list', DisplayContactsList);
router.get('/contact-add', AuthGuard, DisplayContactsAddPage);
router.post('/contact-add', AuthGuard,ProcessContactsAddPage);
router.post('/contact-edit/:id', AuthGuard,ProcessContactsEditPage);
router.get('/contact-edit/:id', AuthGuard,DisplayContactsEditPage);
router.get('/contact-delete/:id', AuthGuard,ProcessContactsDelete);

export default router;