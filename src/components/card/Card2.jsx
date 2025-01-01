import { ArrowUpRight } from 'lucide-react'

export default function CourseCard() {
    return (
        <div className="w-full max-w-[670px] p-6 rounded-3xl bg-[#F5F5F5] text-[F5F5F5]">
            <div className="space-y-16">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">Yuqori Dars</h2>
                    <p className="text-[#5C5C5C]">24 Video + Workbook</p>
                </div>

                <div className="space-y-8">
                    <h3 className="text-4xl font-bold">520 000 So'm</h3>

                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-black">
                        <ArrowUpRight className="w-6 cursor-pointer h-6 text-white" />
                    </div>
                </div>
            </div>
        </div>
    )
}

