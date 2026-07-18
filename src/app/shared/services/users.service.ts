import { Injectable } from '@angular/core';
import { Ires, Iuser } from '../model/user';
import { Observable, of } from 'rxjs';
import { iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
UsersDetails: Array<Iuser> = [
  {
    userName: 'Rahul Sharma',
    userId: 'EMP201',
    userRole: 'admin',
    profileDescription: 'Frontend developer with expertise in Angular and TypeScript.',
    profileImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200',
    skills: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    experienceYears: '2 to 4 years',
    isActive: true,
    address: {
      current: {
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '411014'
      },
      permanent: {
        city: 'Nashik',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '422001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Sneha Patil',
    userId: 'EMP202',
    userRole: 'buyer',
    profileDescription: 'Passionate UI developer with responsive web design experience.',
    profileImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    experienceYears: '1 to 3 years',
    isActive: true,
    address: {
      current: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001'
      },
      permanent: {
        city: 'Ratnagiri',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '415612'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Amit Verma',
    userId: 'EMP203',
    userRole: 'buyer',
    profileDescription: 'Experienced in Angular, REST APIs, and RxJS development.',
    profileImage: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200',
    skills: ['Angular', 'RxJS', 'REST API', 'Git'],
    experienceYears: '4 to 6 years',
    isActive: false,
    address: {
      current: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        zipcode: '500001'
      },
      permanent: {
        city: 'Nagpur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '440001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Priya Kulkarni',
    userId: 'EMP204',
    userRole: 'superAdmin',
    profileDescription: 'Leading Angular projects with strong problem-solving skills.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    skills: ['Angular', 'Leadership', 'TypeScript', 'Agile'],
    experienceYears: '6 to 8 years',
    isActive: true,
    address: {
      current: {
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        zipcode: '560001'
      },
      permanent: {
        city: 'Kolhapur',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '416003'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Rohit Deshmukh',
    userId: 'EMP205',
    userRole: 'superAdmin',
    profileDescription: 'Node.js developer with database and API integration experience.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL'],
    experienceYears: '3 to 5 years',
    isActive: false,
    address: {
      current: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        zipcode: '600001'
      },
      permanent: {
        city: 'Aurangabad',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '431001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Neha Joshi',
    userId: 'EMP206',
    userRole: 'admin',
    profileDescription: 'Full Stack developer experienced in Angular and Node.js.',
    profileImage: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    skills: ['Angular', 'Node.js', 'MongoDB', 'TypeScript'],
    experienceYears: '5 to 7 years',
    isActive: true,
    address: {
      current: {
        city: 'Delhi',
        state: 'Delhi',
        country: 'India',
        zipcode: '110001'
      },
      permanent: {
        city: 'Jaipur',
        state: 'Rajasthan',
        country: 'India',
        zipcode: '302001'
      }
    },
    isAddSame: true
  }
];
  constructor() { }

  FetchUser():Observable<Array<Iuser>>{
    return of(this.UsersDetails)
  }

  fetchById(userid:string):Observable<Iuser>{
    let userobj=this.UsersDetails.find(u => (u.userId===userid))!
    return of(userobj)
  }

  createaddusers(user:Iuser):Observable<Ires<Iuser>>{
    this.UsersDetails.unshift(user)
    return of({
      msg:`User Added are ${user.userId} succefully `,
      data:user
    })
  }


  userupdated(user:Iuser):Observable<Ires<Iuser>>{
    let getindex=this.UsersDetails.findIndex(u => (u.userId===user.userId))
    this.UsersDetails[getindex]=user
    return of({
      msg:`User Updated are ${user.userId} succefully `,
      data:user
    })
  }

  userremove(id:string):Observable<Ires<Iuser>>{
    let getindex=this.UsersDetails.findIndex(obj => (obj.userId===id))
    let rem=this.UsersDetails.splice(getindex, 1)
    return of({
      msg:`user Item removed ${rem[0].userId} are succefully `,
      data:rem[0]
    })
  }
}
