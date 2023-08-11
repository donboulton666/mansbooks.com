"use client"

import { useState, useEffect } from "react"
import data, { Skin } from "@emoji-mart/data"
import Picker from "@emoji-mart/react"
import "./Textarea.css"
import { init } from "emoji-mart"

export default function Textarea() {
    init({ data })
    useEffect(() => {
        let url = new URLSearchParams(window.location.search)
        setTitleValue(localStorage.getItem(`title${url.get("session-id")}&${url.get("tab")}`) || "")
        setTextValue(localStorage.getItem(`text${url.get("session-id")}&${url.get("tab")}`) || "")
    }, [])
    let [titleValue, setTitleValue] = useState("")
    let [textValue, setTextValue] = useState("")
    let [showEmoji, setShowEmoji] = useState(false)
    useEffect(() => {
        let titlevalue = document.getElementById("title")!.value
        let textvalue = document.getElementById("text")!.value
        let url = new URLSearchParams(window.location.search)
        document.getElementById("titlechar")!.innerHTML = (titlevalue as string).length as unknown as string
        document.getElementById("textchar")!.innerHTML = (textvalue as string).length as unknown as string
        if (url.has("title") || url.has("text") || url.get("session-id") == null || url.get("tab") == null) return
        else {
            localStorage.setItem(`title${url.get("session-id")}&${url.get("tab")}`, titlevalue as string)
            localStorage.setItem(`text${url.get("session-id")}&${url.get("tab")}`, textvalue as string)
        }
    }, [titleValue, textValue])
    useEffect(() => {
        document.addEventListener("click", e => {
            if (showEmoji && e.target!.tagName != "EM-EMOJI-PICKER") {
                showEmoji = false
                setShowEmoji(false)
            }
        })
        if (!showEmoji) {
            document.getElementById("openemojipicker")!.style.display = "block"
            document.getElementById("openemojipicker")!.style.marginTop = "-70px"
            document.getElementById("closemojipicker")!.style.display = "none"
        }
        else if (showEmoji) {
            document.getElementById("closemojipicker")!.style.display = "block"
            document.getElementById("closemojipicker")!.style.marginTop = "-70px"
            document.getElementById("openemojipicker")!.style.display = "none"
        }
    }, [showEmoji])
    
    return (
        <>
            <textarea id="title" placeholder="Title" autoComplete="off" value={titleValue || ""} onChange={(e) => setTitleValue(e.target.value)}></textarea>
            <h1 id="titlechar">0</h1>
            <textarea id="text" placeholder="Content" autoComplete="off" value={textValue || ""} onChange={(e) => {
                setTextValue(e.target.value)
                let textvalue = e.target.value.split("\n")
                document.getElementById("textrow")!.innerHTML = textvalue.length as unknown as string
            }}></textarea>
            <h1 id="textchar">0</h1>
            <h1 id="textrow">1</h1>
            <h1 id="closemojipicker" onClick={() => setShowEmoji(false)}>★</h1>
            <h1 id="openemojipicker" onClick={() => setShowEmoji(true)}>☆</h1>
            {showEmoji && <div id="emojipickerdiv">
                <Picker onEmojiSelect={(emoji: Skin) => {
                    let e = emoji.unified.split("_")
                    let codeArray: string[] = []
                    e.forEach((el) => codeArray.push("0x" + el))
                    let em = String.fromCodePoint(...codeArray as unknown as number[])
                    setTextValue(textValue + em)
                }} />
            </div>}
        </>
    )
}