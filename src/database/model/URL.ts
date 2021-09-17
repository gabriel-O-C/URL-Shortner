import {prop, Typegoose, getModelForClass } from '@typegoose/typegoose';

export class URL extends Typegoose {
    @prop({required: true })
    hash: string

    @prop({required: true })
    originURL: string
}

export const URLModel = new URL().getModelForClass(URL)