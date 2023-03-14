import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import {useRouter} from "next/router";

function Home({ authValid }: { authValid: boolean }) {

    return (
        <Page className="flex flex-col gap-12">
            <section className="flex flex-col gap-6">
                <Text variant="h1">OpenAI GPT-3 text model usage example</Text>
                <Text className="text-zinc-600">
                    In this example, a simple chat bot is implemented using Next.js, API
                    Routes, and OpenAI API.
                </Text>
            </section>

            <section className="flex flex-col gap-3">
                <Text variant="h2">AI Chat Bot:</Text>
                <div className="lg:w-2/3">
                    {authValid ? <Chat /> : <Text className="text-zinc-600">You are not authorized to use this app</Text>}
                </div>
            </section>
        </Page>
    )
}

Home.Layout = Layout


export async function getServerSideProps(context) {
    const authValid = (context?.query?.auth === process.env.AUTH_APP);
    return {
        props: {
            authValid,
        },
    };
}


export default Home
