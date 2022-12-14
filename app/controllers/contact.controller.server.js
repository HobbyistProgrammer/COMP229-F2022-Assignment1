/**
    Name: Benton Le
    Student#: 301174103
    Date: 10/21/2022
    Professor: Thiago Vitor De Castilho
    Assignment: Assignment 2
    Course: COMP229-402
*/
import contactModel from '../models/contact.js';
import { UserDisplayName } from '../utils/index.js';

export function DisplayContactsList(req, res, next){
    contactModel.find(function(err, contactsCollections) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contact List', page: 'contacts/list', contacts: contactsCollections, displayName: UserDisplayName(req)});
    })
}

export function DisplayContactsAddPage(req, res, next){
    res.render('index', { title: 'Add Contact', page: 'contacts/edit', contacts: {} , displayName: UserDisplayName(req)});
}

export function ProcessContactsAddPage(req, res, next){
    
    let newContact = contactModel({
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    contactModel.create(newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function DisplayContactsEditPage(req, res, next){
    let id = req.params.id;

    contactModel.findById(id, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Contact', page: 'contacts/edit', contacts: contact, displayName: UserDisplayName(req) });
    });    
}

export function ProcessContactsEditPage(req, res, next){

    let id = req.params.id;
    
    let newContact = contactModel({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    contactModel.updateOne({_id: id }, newContact, (err, Contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list')
    } )
}

export function ProcessContactsDelete(req, res, next){
    let id = req.params.id;

    contactModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/contact-list');
    })
}

