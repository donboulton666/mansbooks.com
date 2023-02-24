import React from 'react';
import Head from "next/head";
import { useForm, SubmitHandler } from 'react-hook-form';
import Center from "../components/Center";
import LeftText from "../components/LeftText";
import ColumnGridLeft from "../components/column-grid-left";
import Layout from "@components/layout";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    alert(JSON.stringify(data));
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="mr-10 ml-10 mt-10 mb-20">
        <p>
          <Center>Contact the Queen</Center>
          <p>Use the form below to Contact Angelina Jordan.</p>
        </p>
        <LeftText>Social Links</LeftText>
        <ColumnGridLeft>
          <div className='mr-20 mt-4'>
            Extended Profile Information:{" "}
            <p>
              <a href="https://angelinajordanofficial.com">
               🔗 Angelina Jordan official Website
              </a>
            </p>
            <p>
              <a href="https://youtube.com/c/AngelinaJordanOfficial">
                🔗 Angelina Jordan YouTube Channel
              </a>
            </p>
            <p>
              <a href="https://youtube.com/c/AngelinaJordanCoverChannel">
                🔗 Angelina Jordan Cover Offical
              </a>
            </p>
            <p>
              <a href="https://www.instagram.com/angelinajordana/">
                🔗 Angelina Jordan Instagram
              </a>
            </p>
            <p>
              <a href="https://www.facebook.com/angelinajordanofficial">
                🔗 Angelina Jordan Facebook
              </a>
            </p>
            <p>
              <a href="https://www.tiktok.com/@angelinajordana">
                🔗 Angelina Jordan TikTok
              </a>
            </p>
          </div>
          <div className="-mt-2 mb-24 text-slate-200 lg:col-span-2 lg:mt-0">
            <form 
              className="container"
              method="POST"
              name="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <p className="hidden">
                <label>
                  Don not fill this out if you are human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div>
                <label className="mb-2 mt-2 block text-xs font-bold uppercase tracking-wide text-slate-200">First Name</label>
                <input {...register('firstName')} className="mt-1 block w-96 rounded-md border-slate-900 bg-slate-800 p-2.5 pl-14 text-slate-200 caret-blue-500 shadow-sm focus:border-blue-500 focus:caret-indigo-500 focus:ring-slate-500 sm:text-sm" />
              </div>

              <div>
                <label className="mb-2 mt-2 block text-xs font-bold uppercase tracking-wide text-slate-200">Last Name</label>
                <input {...register('lastName')} className="w-96 mt-1 block rounded-md border-slate-900 bg-slate-800 p-2.5 pl-14 text-slate-200 caret-blue-500 shadow-sm focus:border-blue-500 focus:caret-indigo-500 focus:ring-slate-500 sm:text-sm" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 mt-2 block text-xs font-bold uppercase tracking-wide text-slate-200">Email</label>
                <input type="email" {...register('email')} className="mt-1 block w-96 rounded-md border-slate-900 bg-slate-800 p-2.5 pl-14 text-slate-200 caret-blue-500 shadow-sm focus:border-blue-500 focus:caret-indigo-500 focus:ring-slate-500 sm:text-sm" />
              </div>

              <input className="rounded-md my-2 px-4 text-slate-200 shadow-lg bg-slate-900 hover:shadow-slate-800/50" type="submit" />
            </form>   
          </div>
        </ColumnGridLeft>    
      </div>      
    </Layout>
  );
}
