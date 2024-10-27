import getWikiResult from "../../../lib/getWikiResult"



type Props = {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({params: {searchTerm}}: Props){
  const wikiData: Promise<SeactResult> =  getWikiResult(searchTerm)
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll('%20', ' ');

  if(!data?.query?.pages){
    return {
      title: `${displayTerm} Not Found`
    }
  }

  return {
    title: displayTerm,
    description: `Search result for ${displayTerm}`
  }
}
export default async function SearchResults({params: {searchTerm}}: Props) {
  const wikiData: Promise<SeactResult> =  getWikiResult(searchTerm)
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;  

  console.log(results, "MAPPED")

  const content = (
    <main className="bg-slate-900 mx-auto max-w-lg py-1 min-h-screen">
      {results ? Object.values(results).map(result => {
        return <p key={result.pageid}>{JSON.stringify(result)}</p> 
      })
      : <h2 className="p-2 text-xl">{`${searchTerm} Not Foound`}</h2>}

    </main>

  )
  return content;
}