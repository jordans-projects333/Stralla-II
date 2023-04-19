import { NextResponse } from 'next/server';
import formidable from 'formidable';
import path from 'path';
import fs from 'fs/promises';
import { IncomingMessage } from 'http';
import sharp from 'sharp';
import imageTest from '../../public/images/egg.jpg'
import { prisma } from '@/lib/prisma';

export const config = {
  api: {
    bodyParser: false,
  },
};

// const readFile = async (req: any) => {
  
//   const form = formidable(options);
//   form.parse(req, (err, fields, files) => {
//     if(err)console.log(err)
//     console.log(JSON.stringify({ fields, files }))
//   });
// };
const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});


// Upload


export default async function(req:any, res:any) {
	if (req.method == 'POST') {
    // const res = await cloudinary.uploader.upload(path.join(process.cwd(), '/public/images/whatthefox.jpg'), {public_id: "test_bear"})
   
    // res.then((data: { secure_url: any; }) => {
    //   console.log(data);
    //   console.log(data.secure_url);
    // }).catch((err: any) => {
    //   console.log(err);
    // });

		const form = formidable({maxFileSize: 4.5 * 1024 * 1024})
		const result:any = await new Promise(function(resolve, reject) {
			form.parse(req, function(err, fields, files) {
				if (err) {
					reject(err)
				}
				console.log('parsing')
				resolve({files, fields})
			})
		})
		console.log('feilds', result.fields.name, result.fields.type)
		const response = await cloudinary.uploader.upload(result.files.image.filepath, {public_id: result.fields.name})
		// console.log(response.url)
		let index = await prisma.componentCategory.findFirst( {where: {name: result.fields.type}, select: { id : true}})
		console.log(index!.id, 'pood')
		let heep = await prisma.componentSubCategory.create({data: {
			name: result.fields.name,
			imageUrl: response.url,
			ComponentCategory: { 
				connect: {
					id: index!.id
				}
			}
		}})
		console.log(heep)
    	// fs.copyFile(result.files.image.filepath, path.join(process.cwd(), '/public/images/phil.webp'))
    // sharp(result.files.image.filepath).resize({width: 400, height: 400}).webp({quality: 75}).toFile(path.join(process.cwd(), '/public/images/Teddy.webp'))
		// if (!result.files) {
		// 	return res.status(400).json({message: 'Skipping it all'})
		// } else {
		// 	return res.json(result)
		// }
    return res.end()
	}
}






// const localOptions: any = {
//   multiple: true,
//   uploadDir:  path.join(process.cwd(), '/public/images'),
//   filename: (name: any, ext: any, path: { originalFilename: string; }, form: any) => {
//     return Date.now().toString() + '_' + path.originalFilename;
//   },
//   maxFileSize: 4.5 * 1024 * 1024
// }