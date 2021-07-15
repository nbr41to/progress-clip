import Image from 'next/image';
import { Button } from '../src/components/Button';
import { ProgressTemplate } from '../src/components/ProgressTemplate';
import { GoogleContainedFill } from 'akar-icons';

export default function Home() {
  const login = () => {};
  return (
    <div>
      <h1>Progress Clip</h1>
      <p>進捗の報告のプロセスを簡略化！</p>
      <p>投稿内容をここでコピーして,投稿！</p>
      <Button
        label='Googleログイン'
        icon={<GoogleContainedFill />}
        onClick={login}
        bgOrange400
        white
        mt={10}
      />
      <hr />
      <h2>Progress List</h2>
      <ProgressTemplate title='' content='test text' />
    </div>
  );
}
