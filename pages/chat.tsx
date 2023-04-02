import { Layout, Text, Page } from '@vercel/examples-ui'
import { Chat } from '../components/Chat'
import { GetServerSidePropsContext } from 'next';

function Home({ authValid }: { authValid: boolean }) {

    return (
        <Page className="w-full">
            <section className="w-full">
                <Text variant="h2">AI Chat Bot:</Text>
                <div>
                    {authValid ? <Chat /> : <Text className="text-zinc-600">You are not authorized to use this app</Text>}
                </div>
            </section>
        </Page>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const authValid = (context?.query?.auth === process.env.AUTH_APP);
    return {
        props: {
            authValid,
        },
    };
}


export default Home
