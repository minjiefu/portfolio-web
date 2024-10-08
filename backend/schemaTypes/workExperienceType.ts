import {defineField, defineType} from 'sanity'

export const workExperienceType = defineType({
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },   
        {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
                type:'string'
            }
    ]
})