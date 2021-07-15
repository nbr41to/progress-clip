import Image from 'next/image';
import { Button } from 'src/components/Button';
import { ProgressTemplate } from 'src/components/ProgressTemplate';
import { GoogleContainedFill } from 'akar-icons';
import { googleLogin } from 'src/firebase/auth';
import { Box } from '@fower/react';
import { sampleTemplates } from 'src/assets/sample-data';

export default function Home() {
  const login = () => {
    googleLogin();
  };
  return (
    <div>
      <Box toCenterX column toEvenly py={16} h={500}>
        <Box as='h1' border={1} borderWhite px={30} py={12}>
          Progress Clip
        </Box>
        <p>進捗の報告のプロセスを簡略化！</p>
        <p>投稿内容をここでコピーして投稿！</p>
        <Image src='/top-view.jpg' width={320} height={240} />
        <Button
          label='Googleログイン'
          icon={<GoogleContainedFill />}
          onClick={login}
          white
          bgOrange800
          mt={10}
        />
      </Box>
      <Box p={20}>
        <h2>Sample Progress List</h2>
        <Box bgGray200 h={2} my={12} />
        {sampleTemplates.map((template, index) => (
          <ProgressTemplate
            key={index}
            title={template.title}
            content={template.content}
            my={16}
          />
        ))}
      </Box>
    </div>
  );
}
