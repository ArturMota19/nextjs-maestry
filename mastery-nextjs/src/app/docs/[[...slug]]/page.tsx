export default function Docs({ params }: { 
  params: { slug: string[] }
}){
    // docs/feature1/concept1
    if(params.slug?.length === 2) {
      return <h1>Docs for feature {params.slug[0]} and concept {params.slug[1]}</h1>
      // docs/feature1
    }else if(params.slug?.length === 1) {
      return <h1>Docs for feature {params.slug[0]}</h1>
    }
    // if need a basic page for docs, we need to wrap [slug] with one more bracket -> [[slug]]
    return <h1>Docs HomePage</h1>

    // [...slug] -> /docs/feature1/concept1 and /docs/feature1
    // [[...slug]] -> /docs/feature1/concept1 and /docs/feature1 and /docs
}