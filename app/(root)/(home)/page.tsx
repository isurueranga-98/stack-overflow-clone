import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/navbar/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: '1',
    title: 'What is Callback Hell in JS?',
    tags: [
      { _id: '1', name: 'JavaScript' },
      { _id: '2', name: 'Callback' },
    ],
    author: {
      _id: 'authorId1',
      name: 'Isuru Eranga',
      picture: 'url/to/picture1.jpg',
    },
    upvotes: 106595659,
    views: 100,
    answers: [],
    createdAt: new Date('2021-09-01T12:00:00.000Z'),
  },
  {
    _id: '2',
    title: 'What is Routing in ReactJS?',
    tags: [
      { _id: '3', name: 'React' },
      { _id: '4', name: 'Routing' },
    ],
    author: {
      _id: 'authorId2',
      name: 'Hirushi Amarasighe',
      picture: 'url/to/picture2.jpg',
    },
    upvotes: 15,
    views: 120,
    answers: [],
    createdAt: new Date('2021-09-11T12:12:00.000Z'),
  },
];

export default function Home() {
  return (
    <>
      <div className=" flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className=" h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className=" flex justify-end max-sm:w-full">
          <Button className=" primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className=" mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">

        <LocalSearchbar
        
          route ="/"
          iconPosition="left"
          imgSrc ="/assets/icons/search.svg"
          placeholder ="Search for Question"
          otherClasses = "flex-1"
        />
        <Filter
          filters = {HomePageFilters}
          otherClasses =' min-h-[56px] sm:min-w-[170px]'
          containerClasses = 'hidden max-md:flex'
        />
      </div>
      <HomeFilters/>

      <div className=" mt-10 flrx w-full flex-col gap-6">
          { questions.length > 0 ?
          questions.map((question)=> (
            <QuestionCard 
            key={question._id}
            _id = {question._id}
            title = {question.title}
            tags = {question.tags}
            author = {question.author}
            upvotes = {question.upvotes}
            views = {question.views}
            answers = {question.answers}
            createdAt ={question.createdAt}
            />
          ))
          : <NoResult
            title ="There is no question to show"
            description ="Be the first to break the silence! Ask a question and kickstart the discussion. Our query could be the next big thing others learn from. Get involed!"
            link = "/ask-question"
            linkTitle = "Ask a Question"
          />}
      </div>
    </>
  )
}