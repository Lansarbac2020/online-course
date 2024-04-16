import GlobalApi from '@/app/_utils/GlobalApi';
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { toast } from 'sonner';

function CourseEnrollSection({courseInfo, isUserAlreadyEnrolled}) {

    const membership=false;
    const {user} = useUser();
     const router = useRouter();


     useEffect(()=>{
             console.log("isUserAlreadyEnrolled")
     },[])
    const onEnrollCourse=()=>{
      GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(resp=>{
        console.log(resp)

        
        if(resp)
        {

        //toast message
        toast("Inscription reussie avec succes",{
          description: 'Vous etes inscrit a ce cours',
        })
 
          // redirect to watch course page
          router.push('/watch-course/'+resp. createUserEnrollCourse.id)
        }
           
      })
    }
  return (
    <div className='p-3 text-center rounded-sm bg-primary flex flex-col gap-3 mt-[100px]'>

        <h2 className='text-[22px] font-bold  text-white'>Engistrez au cours</h2>
        {/* User has membership  */}
        { user && (membership||courseInfo.free)&&!isUserAlreadyEnrolled? <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Engistrez maintenant et decouvrir de nouvelle aventure</h2>

        <Button className='bg-white text-primary hover:bg-white hover:text-primary'
        onClick={()=>onEnrollCourse()}
        >Enregistrez</Button>
        </div>

          :!user?
          <div className='flex flex-col gap-3 mt-3'>
        <h2 className='text-white font-light'>Engistrez maintenant et decouvrir de nouvelle aventure</h2>

        <Link href={'/sign-in'}><Button className='bg-white text-primary hover:bg-white hover:text-primary' >Enregistrez</Button></Link>
        </div>

        :  !isUserAlreadyEnrolled && <div className="flex flex-col gap-3 mt-3">

<h2 className='text-white font-light'>Inscrivez-vous au package premimum afin d'acceder a tous nos cours</h2>

<Link href='https://www.buymeacoffee.com/lansarbacoj'> <Button className='bg-white text-primary hover:bg-white hover:text-primary'>Premium $12</Button></Link>
           
        </div>}
         {/* user does not have menbership or not signup/login */}

        {isUserAlreadyEnrolled&&  
        
        
  <div className="flex flex-col gap-3 mt-3">

<h2 className='text-white font-light'>Continuez a apprendre votre cours
</h2>
<Link href={'/watch-course/'+isUserAlreadyEnrolled}>
<Button className='bg-white text-primary hover:bg-white hover:text-primary'>Continuez</Button>
</Link>
           
        </div>}
    </div>
  )
}

export default CourseEnrollSection