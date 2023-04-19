import { create } from 'zustand'

export const useStore = create((set) => ({
    adminModelActive: false,
    addCategoryModel: false,
    categoryType: ''
    }
))