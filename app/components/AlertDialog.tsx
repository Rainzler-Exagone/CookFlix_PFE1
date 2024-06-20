import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import Profile from "./Profile";

 export default function DialogProfie() {
   return(
    <AlertDialog>
    <AlertDialogTrigger><h1 className="text-sm">Profile</h1></AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Profile</AlertDialogTitle>
        <Profile/>
      </AlertDialogHeader>
    
    </AlertDialogContent>
  </AlertDialog>
   )
  
}