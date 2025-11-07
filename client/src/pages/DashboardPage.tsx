import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Plus, MoreVertical, Edit, Eye, Share2, Copy, Trash2, Calendar, Users, BarChart3 } from "lucide-react";
import weddingPink from '@assets/generated_images/Wedding_website_template_elegant_pink_b3b8566b.png';
import weddingNavy from '@assets/generated_images/Wedding_website_template_luxury_navy_f1fc892c.png';
import birthdayFun from '@assets/generated_images/Birthday_website_template_colorful_fun_058271e2.png';
import corporateEvent from '@assets/generated_images/Corporate_event_website_professional_e5d86ef7.png';
import invitationIcons from '@assets/generated_images/Invitation_icon_set_minimal_39de28e1.png';

interface Invitation {
  id: string;
  coupleName: string;
  eventDate: string;
  templateThumbnail: string;
  viewCount: number;
  rsvpCount: number;
  createdAt: string;
}

const sampleInvitations: Invitation[] = [
  {
    id: "inv-001",
    coupleName: "Sarah & Ahmad",
    eventDate: "25 Desember 2025",
    templateThumbnail: weddingPink,
    viewCount: 342,
    rsvpCount: 87,
    createdAt: "2024-11-01"
  },
  {
    id: "inv-002",
    coupleName: "Dian & Budi",
    eventDate: "15 Januari 2026",
    templateThumbnail: weddingNavy,
    viewCount: 156,
    rsvpCount: 45,
    createdAt: "2024-10-28"
  },
  {
    id: "inv-003",
    coupleName: "Ulang Tahun Rina",
    eventDate: "10 Februari 2026",
    templateThumbnail: birthdayFun,
    viewCount: 89,
    rsvpCount: 32,
    createdAt: "2024-10-25"
  },
  {
    id: "inv-004",
    coupleName: "Gathering Perusahaan",
    eventDate: "5 Maret 2026",
    templateThumbnail: corporateEvent,
    viewCount: 234,
    rsvpCount: 102,
    createdAt: "2024-10-20"
  }
];

export default function DashboardPage() {
  const [invitations, setInvitations] = useState<Invitation[]>(sampleInvitations);

  const handleEdit = (id: string) => {
    console.log('Edit invitation:', id);
  };

  const handlePreview = (id: string) => {
    console.log('Preview invitation:', id);
  };

  const handleShare = (id: string) => {
    console.log('Share invitation:', id);
  };

  const handleDuplicate = (id: string) => {
    console.log('Duplicate invitation:', id);
  };

  const handleDelete = (id: string) => {
    console.log('Delete invitation:', id);
    setInvitations(invitations.filter(inv => inv.id !== id));
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border backdrop-blur-lg bg-background/80 sticky top-0 z-50">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-serif text-xl font-semibold hover-elevate rounded-md px-2 -ml-2" data-testid="link-home">
              konDangan.id
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild data-testid="button-templates">
                <Link href="/templates">Template</Link>
              </Button>
              <Button variant="ghost" asChild data-testid="button-dashboard">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-2" data-testid="text-page-title">Undangan Saya</h1>
            <p className="text-muted-foreground" data-testid="text-page-description">Kelola semua undangan yang telah Anda buat</p>
          </div>
          <Button size="lg" className="min-h-[48px] px-6" asChild data-testid="button-create-new">
            <Link href="/templates">
              <Plus className="w-5 h-5 mr-2" />
              Buat Baru
            </Link>
          </Button>
        </div>

        {invitations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {invitations.map((invitation) => (
              <Card key={invitation.id} className="group overflow-hidden hover-elevate cursor-pointer" data-testid={`card-invitation-${invitation.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                  <img 
                    src={invitation.templateThumbnail} 
                    alt={invitation.coupleName}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-testid={`img-thumbnail-${invitation.id}`}
                  />
                  <div className="absolute top-3 right-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="secondary" 
                          size="icon" 
                          className="h-8 w-8 backdrop-blur-md bg-white/90 hover:bg-white shadow-md"
                          data-testid={`button-actions-${invitation.id}`}
                        >
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" data-testid={`menu-actions-${invitation.id}`}>
                        <DropdownMenuItem 
                          onClick={() => handleEdit(invitation.id)}
                          data-testid={`menu-item-edit-${invitation.id}`}
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handlePreview(invitation.id)}
                          data-testid={`menu-item-preview-${invitation.id}`}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleShare(invitation.id)}
                          data-testid={`menu-item-share-${invitation.id}`}
                        >
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDuplicate(invitation.id)}
                          data-testid={`menu-item-duplicate-${invitation.id}`}
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem 
                          onClick={() => handleDelete(invitation.id)}
                          className="text-destructive focus:text-destructive"
                          data-testid={`menu-item-delete-${invitation.id}`}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2" data-testid={`text-couple-name-${invitation.id}`}>
                    {invitation.coupleName}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span data-testid={`text-event-date-${invitation.id}`}>{invitation.eventDate}</span>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium" data-testid={`text-view-count-${invitation.id}`}>{invitation.viewCount}</span>
                      <span className="text-muted-foreground">views</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium" data-testid={`text-rsvp-count-${invitation.id}`}>{invitation.rsvpCount}</span>
                      <span className="text-muted-foreground">RSVP</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 px-6" data-testid="container-empty-state">
            <div className="max-w-md text-center">
              <div className="mb-8 flex justify-center">
                <div className="w-48 h-48 rounded-2xl bg-muted/50 flex items-center justify-center overflow-hidden">
                  <img 
                    src={invitationIcons} 
                    alt="No invitations" 
                    className="w-32 h-32 object-contain opacity-40"
                    data-testid="img-empty-state"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-3" data-testid="text-empty-title">
                Belum Ada Undangan
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed" data-testid="text-empty-description">
                Mulai buat undangan pertama Anda dengan memilih template yang sesuai dengan acara spesial Anda
              </p>
              <Button size="lg" className="min-h-[48px] px-8 rounded-full" asChild data-testid="button-create-first">
                <Link href="/templates">
                  <Plus className="w-5 h-5 mr-2" />
                  Buat Undangan Pertama
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
