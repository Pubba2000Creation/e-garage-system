import { useState } from 'react'
import SearchServiceCard from '@/components/user/search-service-card'
import SearchErrorTag from '@/components/user/search-error-tag'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import service_card_1 from '@/public/images/carousel_1.jpg'
import SmBtn from '@/components/user/sm-btn'
import SearchFiterForm from '@/components/user/search-fiter-form'

export default function UserSearchPopSection(props: {
  search_count: number
  one_stars_count: number
  two_stars_count: number
  three_stars_count: number
  four_stars_count: number
  five_stars_count: number
  search_key_word: string
  searchingError: boolean
  onclose: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedPage, setSelectedPage] = useState('')

  function handleButtonClick(page_name: string) {
    setSelectedPage('')
    setSelectedPage(page_name)
    console.log(selectedPage)
  }

  return (
    <div className="flex w-full my-1 ">
      {/* mobile filter  */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="bg-white" asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white" side="left">
            <SheetHeader>
              <SheetTitle className="text-center">Search Filters</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              <SearchFiterForm
                five_stars_count={props.five_stars_count}
                four_stars_count={props.four_stars_count}
                three_stars_count={props.three_stars_count}
                two_stars_count={props.two_stars_count}
                one_stars_count={props.one_stars_count}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Sidebar */}
      <aside className="hidden lg:block  w-1/4  bg-white rounded-md shadow-md">
        <SearchFiterForm
          five_stars_count={props.five_stars_count}
          four_stars_count={props.four_stars_count}
          three_stars_count={props.three_stars_count}
          two_stars_count={props.two_stars_count}
          one_stars_count={props.one_stars_count}
        />
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-4 bg-white rounded-md shadow-md">
        <div className="flex justify-between ">
          <h2 className="font-semibold mb-4  text-gray">
            <span className="font-bold text-black">
              {props.searchingError === true ? '0' : props.search_count}
            </span>{' '}
            results found
          </h2>
          <button
            onClick={() => props.onclose()}
            className="-mt-5 bg-transparent border-none text-3xl cursor-pointer text-red-500 hover:text-red-700"
          >
            &times;
          </button>
        </div>

        <div className="space-y-4">
          {/* error section */}

          {props.searchingError === true ? (
            <SearchErrorTag search_key_word={props.search_key_word} />
          ) : (
            <>
              <ScrollArea className="h-96 w-full rounded-md  bg-light_gray  py-2 px-4">
                {/* Service Card */}
                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />

                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />

                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />

                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />

                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />

                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />

                <SearchServiceCard
                  img={service_card_1.src}
                  alt={'Wardhana Service Station'}
                  title={'Wardhana Service Station'}
                  address={'No.329/4 B High Level Rd, Maharagama'}
                  description={
                    'Lorem ipsum dolor sit amet consectetur adipiscing elit. Etiam euismod ligula nec nisi ultrices, ac luctus sem molestie. Fusce sit amet rutrum nibh. Suspendisse potenti. Aliquam erat volutpat. '
                  }
                  star_count={10}
                  review_count={10}
                  fun={() => {}}
                />
              </ScrollArea>

              <form className="flex justify-center gap-0.5">
                <SmBtn
                  type="button"
                  fun={() => {
                    handleButtonClick('Previous')
                  }}
                  name={'Previous'}
                />
                <SmBtn
                  type="button"
                  fun={() => {
                    handleButtonClick('1')
                  }}
                  name={'1'}
                />
                <SmBtn
                  type="button"
                  fun={() => {
                    handleButtonClick('2')
                  }}
                  name={'2'}
                />
                <SmBtn
                  type="button"
                  fun={() => {
                    handleButtonClick('3')
                  }}
                  name={'3'}
                />
                <SmBtn
                  type="button"
                  fun={() => {
                    handleButtonClick('...')
                  }}
                  name={'...'}
                />
                <SmBtn
                  type="button"
                  fun={() => {
                    handleButtonClick('Next')
                  }}
                  name={'Next'}
                />
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  )
}
