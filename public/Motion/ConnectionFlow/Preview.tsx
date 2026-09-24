import Page from './Page'
import PreviewWrapper from '@/components/Preview/PreviewWrapper'

export default function Preview({ preview }: { preview?: boolean }) {
    return (
        <PreviewWrapper
            preview={preview}
            className="w-full h-full relative flex items-center justify-center overflow-hidden"
        >
            <div className="w-full shrink-0 flex items-center justify-center scale-150 md:scale-200 origin-center -mt-50 md:-mt-85">
                <Page />
            </div>
        </PreviewWrapper>
    )
}