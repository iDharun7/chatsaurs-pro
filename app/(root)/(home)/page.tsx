import MeetingTypeList from '@/components/MeetingTypeList';
import { name } from '@stream-io/video-react-sdk';
import { User } from 'lucide-react';
const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-IN', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
           Hi Chatsaurs Pro User
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{date}</h1>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;