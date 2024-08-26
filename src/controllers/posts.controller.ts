import { Request, Response } from "express";
import prisma from "../models/prisma.model";


export const createPost = async (req: Request, res: Response) => {
    const {title, content, category, tags} = req.body

    if(!title || !content || !category || !tags) return res.status(400).json({ error: "Title, content, category and tags are required!"})
    try {
        const post = await prisma.post.create({
            data:{
                title,
                content,
                category,
                tags
            }
        })
        
        res.status(201).json(post)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const updatePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const {title, content, category, tags} = req.body

    try {
        const post = await prisma.post.findUnique({ where: { id }})
        if(!post) return res.status(404).json({ message: "Post not found."})
        
        const newPost = await prisma.post.update({
            where: { id },
            data:{
                title: title || post.title,
                content: content || post.content,
                category: category || post.category,
                tags: tags || post.tags
            }
        })

        res.status(200).json(newPost)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    try {
        const post = await prisma.post.findUnique({ where: { id }})
        if(!post) return res.status(404).json({ message: "Post not found."})

        const deletedPost = await prisma.post.delete({ where: { id } })
        res.status(204)
    } catch (error) {
        res.status(400).json({ error })
    }
}


export const getPost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)

    try {
        const post = await prisma.post.findUnique({ where: { id }})
        if(!post) return res.status(404).json({ message: "Post not found."})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({ error })
    }
}

export const getAllPosts = async (req: Request, res: Response) => {
    const { term } = req.query
    try {
        const posts = await prisma.post.findMany({
            where: term ? {
                OR: [
                    { title: { contains: term as string, mode: 'insensitive' } },
                    { content: { contains: term as string, mode: 'insensitive' } },
                    { category: { contains: term as string, mode: 'insensitive' } },
                    {
                        tags: {
                            hasSome: [term as string]
                        }
                    }
                ]
            } : undefined
        })

        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({ error })
    }
}