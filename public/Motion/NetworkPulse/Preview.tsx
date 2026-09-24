import Page from './Page'
import PreviewWrapper from '@/components/Preview/PreviewWrapper'

export default function Preview({ preview }: { preview?: boolean }) {
    return (
        <PreviewWrapper
            preview={preview}
            className="w-full h-full relative flex items-center justify-center overflow-hidden"
        >
            <div className="w-full shrink-0 flex items-center justify-center scale-125 md:scale-120 origin-center">
                <Page />
            </div>
        </PreviewWrapper>
    )
}