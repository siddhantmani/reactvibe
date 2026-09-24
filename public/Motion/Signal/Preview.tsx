import Page from './Page'
import PreviewWrapper from '@/components/Preview/PreviewWrapper'

export default function Preview({ preview }: { preview?: boolean }) {
    return (
        <PreviewWrapper
            preview={preview}
            className="w-full flex items-center justify-center origin-center"
        >
            <div className="w-full">
                <Page />
            </div>
        </PreviewWrapper>
    )
}