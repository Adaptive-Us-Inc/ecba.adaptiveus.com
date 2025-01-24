import DownloadForm from '@/components/Login/DownloadForm'
import Head from 'next/head'
import React from 'react'

const index = () => {
    return (
        <>
            <Head>
                <meta name="title" content={'CBAP Certification Training'} />
                <meta name='robots' content={'noindex,nofollow'} />
            </Head>
            <DownloadForm />
        </>
    )
}

export default index