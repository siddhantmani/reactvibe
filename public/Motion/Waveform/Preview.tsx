import Page from './Page'
import PreviewWrapper from '@/components/Preview/PreviewWrapper'

export default function Preview({ preview }: { preview?: boolean }) {
    return (
        <PreviewWrapper
            preview={preview}
            className="w-full overflow-visible flex items-center justify-center min-h-[300px]"
        >
            <div className="w-full origin-center scale-125 md:scale-150 mt-150">
                <Page />
            </div>
        </PreviewWrapper>
    )
}